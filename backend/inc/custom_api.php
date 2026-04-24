<?php

const frontend_url = "https://www.lalicat.com/";

require_once get_template_directory().'/vendor/autoload.php';
use Stichoza\GoogleTranslate\GoogleTranslate;

define ('base_url', 'https://www.lalicat.com/');

function set_lang($lang){
	$tr = new GoogleTranslate();
	$tr->setSource('en');
	$tr->setTarget($lang);
	return $tr;
}

function cache_set_or_get($lang, $key, $translate_value){
    
	if($lang && get_transient($key)){
       return get_transient($key);
	}

	if(get_transient($key) === false){
		$tr = set_lang($lang);
		try{
		    if($lang === "ja"){
		        $translate_value = strip_tags($translate_value);
		    }
		    $translated = $tr->translate($translate_value);
		    set_transient($key, $translated, 10 * YEAR_IN_SECONDS);
		    return get_transient($key);
		}catch(exception $e){
              if($e){
                   set_transient($key, $translate_value, 10 * YEAR_IN_SECONDS);
		           return get_transient($key);
               }		     
		 }
		
	}
}

function cache_replace($lang, $key, $translate_value){
    	$tr = set_lang($lang);
		try{
		    if($lang === "ja"){
		        $translate_value = strip_tags($translate_value);
		    }
		    $translated = $tr->translate($translate_value);
		    delete_transient($key);
		    set_transient($key, $translated, 10 * YEAR_IN_SECONDS);
		    return get_transient($key);
		}catch(exception $e){
              if($e){
                   delete_transient($key);
		           set_transient($key, $translate_value, 10 * YEAR_IN_SECONDS);
		           return get_transient($key);
               }		     
		}
}


function recent_posts(WP_REST_Request $request){

	$args = array(
		'posts_per_page' => 4,
		'paged' => 1,
		'category_name' => 'blog'
	);

	$the_query = new WP_Query($args);
	if($the_query->have_posts()){
		$posts_array = array();
		while($the_query->have_posts()){
			$the_query->the_post();
			$post_id = get_the_ID();
			$post_title = get_the_title();
			$post_content = get_the_content();
			if($request['lang']){
				$post_title = cache_set_or_get($request['lang'], 'title'.$request['lang'].$post_id, $post_title);
				$post_content = cache_set_or_get($request['lang'], 'content'.$request['lang'].$post_id, $post_content);
			}

			$post_array = array(
				"title" => $post_title,
				"featured_image" => get_the_post_thumbnail_url(get_the_ID()),
				"author" => get_the_author(),
				"slug" => get_post(get_the_ID())->post_name,
				"date" => get_the_date(),
				"content" => $post_content
			);
			$posts_array[] = $post_array;
		}


		return array("posts" => $posts_array);
	}else{
		return array('msg' => 'no posts found', 'code' => 203);
	}

}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'recent-posts', array(
		'methods' => 'GET',
		'callback' => 'recent_posts',
	));
});


function get_reviews(){
    $args = array(
		'post_type' => 'reivews',
		'post_status' => 'publish'
	);

	$the_query = new WP_Query($args);
	
	if($the_query->have_posts()){
		$posts_array = array();
		while($the_query->have_posts()){
			$the_query->the_post();
			$post_title = get_the_title();
			$post_content = wp_trim_words( get_the_content(), 25, '...');
			$post_array = array(
				"title" => $post_title,
				"content" => $post_content,
				"trust_pilot_link" => get_field('trust_pilot_link'),
				"stars" => get_field('stars'),
				"customer_name" => get_field('customer_name'),
				"review_time" => get_field('review_time')
			);
			$posts_array[] = $post_array;
		}

		return array("reviews" => $posts_array);
	}else{
		return array('msg' => 'no posts found', 'code' => 203);
	}
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'reviews', array(
		'methods' => 'GET',
		'callback' => 'get_reviews',
		'order' => 'DESC'
	));
});




function paginated_posts(WP_REST_Request $request){

	$args = array(
		'posts_per_page' => $request['items'],
		'paged' => $request['page'],
		'category_name' => 'blog'
	);

	$the_query = new WP_Query($args);
	if($the_query->have_posts()){
		$posts_array = array();
		while($the_query->have_posts()){
			$the_query->the_post();
			$post_id = get_the_ID();
			$post_title = get_the_title();
			$post_content = get_the_content();
			
			if($request['lang']){
				$post_title = cache_set_or_get($request['lang'], 'title'.$request['lang'].$post_id, $post_title);
				$post_content = cache_set_or_get($request['lang'], 'content'.$request['lang'].$post_id, $post_content);
			}

			$post_array = array(
				"title" => $post_title,
				"featured_image" => get_the_post_thumbnail_url(get_the_ID()),
				"author" => get_the_author(),
				"slug" => get_post(get_the_ID())->post_name,
				"date" => get_the_date(),
				"content" => $post_content
			);
			
			$posts_array[] = $post_array;
		}

		$page_divide = $the_query->found_posts/$request['items'];

		if(is_float($page_divide)){
			$page_count = round($page_divide);
		}else{
			$page_count = round($page_divide);
		}

		return array("page_count" => $page_count, "posts" => $posts_array);
	}else{
		return array('msg' => 'no posts found', 'code' => 203);
	}

}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'posts/(?P<items>\d+)/(?P<page>\d+)(?:/(?P<lang>[^/]+))?', array(
		'methods' => 'GET',
		'callback' => 'paginated_posts',
	));
});


function get_category_name_by_post_slug( $post_slug ){
    global $wpdb;
    $post = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_name = %s AND post_type = 'post'LIMIT 1", $post_slug ));
        
    if ($post){
        $terms = get_the_terms( $post, 'category' );
        if ( $terms && ! is_wp_error( $terms ) ) {
            return ['name' => $terms[1]->name??'', 'slug' => $terms[1]->slug??''];
        }     
    }
}


function query_post_or_page_by_slug($data){

	$args = array(
		'post_type' => array('post', 'page'),
		'name' => $data['slug'],
		'post_status' => 'publish'
	);
	
	$the_query = new WP_Query($args);
	
	if(isset($data['slug'])){
	    $category = get_category_name_by_post_slug($data['slug']);
	    
	}
	
	
	if($the_query->have_posts()){
		while($the_query->have_posts()){
			$the_query->the_post();
			$post_type = get_post_type(get_the_ID());
			$post_title = get_the_title();
			$post_content = get_the_content();
			$post_id = get_the_ID();
			$keywords = get_field('keywords');
			$description = get_field('description');

			if($post_type == 'post'){
				$check = in_category(array(36, 38, 37, 32, 34, 31, 33, 40, 2), get_the_ID());
				if($check){
					$post_type = 'support';
				}
			}
			
			$next_post = get_next_post(true);
			$next_post_id = $next_post->ID??'';
			$next_post_link = $next_post->post_name??'';
			$next_post_title = $next_post->post_title??'';
			
			$previous_post = get_previous_post(true);
			
			
			   $previous_post_id = $previous_post->ID??'';
			   $previous_post_title = $previous_post->post_title??'';
			   $previous_post_link = $previous_post->post_name??'';   
			
			

			if(isset($data['lang'])){
				$post_title = cache_set_or_get($data['lang'], 'title'.$data['lang'].$post_id, $post_title ?? 'none');
				$post_content = cache_set_or_get($data['lang'], 'content'.$data['lang'].$post_id, $post_content ?? 'none');
				if($keywords){
					$keywords = cache_set_or_get($data['lang'], 'keywords'.$data['lang'].$post_id, $keywords ?? "none");
				}

				if($description){
					$description = cache_set_or_get($data['lang'], 'description'.$data['lang'].$post_id, $description ?? "none");
				}
				
				$previous_post_title = cache_set_or_get($data['lang'], 'title'.$data['lang'].$previous_post_id, $previous_post_title ?? 'none');
				$next_post_title = cache_set_or_get($data['lang'], 'title'.$data['lang'].$next_post_id, $next_post_title ?? 'none');
				$previous_post_link = $data['lang']."/".$previous_post_link;
				$next_post_link = $data['lang']."/".$next_post_link;
			}
			
			$post_name = get_post(get_the_ID())->post_name;

			$post_array = array(
			    "breadcrumb" => [['Home', '/'],['Blog', '/blog'],[$category['name']??'', $category['slug']??'']],
				"title" => $post_title,
				"keywords" => $keywords,
				"description" => $description,
				"featured_image" => get_the_post_thumbnail_url(get_the_ID()),
				"author" => get_the_author(),
				"slug" => $post_name,
				"date" => get_the_date(),
				"content" => $post_content,
				"post_type" => $post_type,
				"next_post_link" => ["title" => $next_post_title, "link" => frontend_url.$next_post_link],
				"previous_post_link" => ["title" => $previous_post_title, "link" => frontend_url.$previous_post_link]
			);
		}
		return $post_array;
	}else{
		return array('msg' => 'no posts found');
	}
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'post/(?P<slug>[a-zA-Z0-9-]+)(?:/(?P<lang>[^/]+))?', array(
		'methods' => 'GET',
		'callback' => 'query_post_or_page_by_slug',
	));
});

function getAllSlugs(){
	$args = array(
		'post_type' => array('post', 'page'),
		'post_status' => 'publish',
		'posts_per_page' => -1
	);
	$the_query = new WP_Query($args);
	if($the_query->have_posts()){
		$slugs_array = array();
		while($the_query->have_posts()){
			$the_query->the_post();
			$slugs_array[] = array( "slug" => get_post( get_the_ID() )->post_name );
		}

		return $slugs_array;
	}else{
		return array('msg' => 'no posts found');
	}
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'slugs', array(
		'methods' => 'GET',
		'callback' => 'getAllSlugs',
	));
});


function sitemap(WP_REST_Request $request){

	$args = array(
		'post_type' => array('post', 'page'),
		'post_status' => 'publish',
		'posts_per_page' => -1
	);
	
	$the_query = new WP_Query($args);
	if($the_query->have_posts()){
		while($the_query->have_posts()){
			$the_query->the_post();
			if($request['lang']){
			    $slugs_array[] = array( "slug" => base_url . $request['lang'] . "/".get_post( get_the_ID() )->post_name);
			}else{
			    $slugs_array[] = array( "slug" => base_url . get_post( get_the_ID() )->post_name);
			}
		}
		
		if($request['lang']){
		    $slugs_array[] = array( "slug" => base_url . $request['lang'] . "/download" );
		    $slugs_array[] = array( "slug" => base_url . $request['lang'] . "/contact" );
		    $slugs_array[] = array( "slug" => base_url . $request['lang'] . "/use-cases" );
		    $slugs_array[] = array( "slug" => base_url . $request['lang'] . "/blog" );
		    $slugs_array[] = array( "slug" => base_url . $request['lang'] . "/pricing" );
		}else{
		    $slugs_array[] = array( "slug" => base_url . "download" );
		    $slugs_array[] = array( "slug" => base_url . "contact" );
		    $slugs_array[] = array( "slug" => base_url . "use-cases");
		    $slugs_array[] = array( "slug" => base_url . "blog" );
		    $slugs_array[] = array( "slug" => base_url . "pricing" );
		}
		
		return $slugs_array;
	}else{
		return array('msg' => 'no posts found');
	}
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'sitemap(?:/(?P<lang>[^/]+))?', array(
		'methods' => 'GET',
		'callback' => 'sitemap',
	));
});


function contact_us(WP_REST_Request $request){

	$title = $request['title'];
	$email = $request['email'];
	$message = $request['message'];

	$post_id = wp_insert_post(
		array('post_title' => $title,
		      'post_status' => 'publish',
		      'post_type' => 'contact',
		      'post_content' => $message));
	$result = update_field('email', $email, $post_id);

	if($result){
		return rest_ensure_response(array('code' => 200, 'message' => 'success'));
	}
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'contact', array(
		'methods' => 'post',
		'callback' => 'contact_us',
	));
});

function twentytwentytwo_register_nav_menus() {
	register_nav_menus( array(
		'docs_menu' => __( 'docs menu', 'twentytwentytwo')
	));
}
add_action( 'after_setup_theme', 'twentytwentytwo_register_nav_menus');


function docs_sidebar_menu(WP_REST_Request $request){

	$docs_menu = wp_get_nav_menu_items('docs-menu');
	$docs_menu_array = array();

	if($request['lang'] && get_transient('sidebar_menu_'.$request['lang'])){
		return get_transient('sidebar_menu_'.$request['lang']);
	}

	if($request['lang']){
		$tr = set_lang($request['lang']);
	}

	foreach($docs_menu as $menu){

		if($menu->menu_item_parent == 0){
			$title = $menu->title;
			if($request['lang']){
				$title = $tr->translate($menu->title);
				$slug1 = base_url.$request['lang'].'/'.get_category( $menu->object_id )->slug;
			}else{
			    $slug1 = base_url.get_category( $menu->object_id )->slug;
			}

			$docs_menu_array[] = array( "key"   => "menu" . $menu->ID,
			                            'label' => $title,
			                            "count" => get_category( $menu->object_id )->category_count,
			                            'slug'  => $slug1,
			                            'icon'  => get_field( 'icon', "category_" . $menu->object_id ),
			                            "nodes" => array()
			);
			$level1_id         = $menu->ID;
			$level = 1;
		}else{

			if($level1_id == $menu->menu_item_parent){
				$level = 2;

				if(get_post($menu->object_id)->post_name == null){
					$title = $menu->title;
					if($request['lang']){
						$title = $tr->translate($menu->title);
					}
					$docs_menu_array[ count( $docs_menu_array ) - 1 ]["nodes"][] = array( "key"   => "menu" . $menu->ID,
					                                                                      'label' => $title,
					                                                                      "nodes" => array()
					);
					$level2_id                                                   = $menu->ID;
					$level = 3;

				}else{
					$title = $menu->title;
					if($request['lang']){
						$title = $tr->translate($menu->title);
						$slug2 = base_url.$request['lang'].'/'.get_post( $menu->object_id )->post_name;
					}else{
					    $slug2 = base_url.get_post( $menu->object_id )->post_name;
					}
					$docs_menu_array[ count( $docs_menu_array ) - 1 ]["nodes"][] = array( "key"   => "menu" . $menu->ID,
					                                                                      'label' => $title,
					                                                                      "slug"  => $slug2
					);
				}
			}

			if($level2_id == $menu->menu_item_parent){
				$title = $menu->title;
				if($request['lang']){
					$title = $tr->translate($menu->title);
					$slug3 = base_url.$request['lang'].'/'.get_post( $menu->object_id )->post_name;
				}else{
				    $slug3 = base_url.get_post( $menu->object_id )->post_name;
				}
				$level1_nodes_length                                                                              = count($docs_menu_array[count($docs_menu_array)-1]["nodes"]);
				$docs_menu_array[ count( $docs_menu_array ) - 1 ]["nodes"][ $level1_nodes_length - 1 ]["nodes"][] = array( "key"   => "menu" . $menu->ID,
				                                                                                                           'label' => $title,
				                                                                                        "slug"  => $slug3
				);
			}

		}
	}

	if($request['lang']){
		set_transient("sidebar_menu_".$request['lang'], $docs_menu_array);
		return get_transient("sidebar_menu_".$request['lang']);
	}

	return $docs_menu_array;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'docs-sidebar(?:/(?P<lang>[^/]+))?', array(
		'methods' => 'get',
		'callback' => 'docs_sidebar_menu',
	));
});

function support_index_by_slug($data){
	$category = get_category_by_slug($data["slug"]);

	$category_id = $category->term_id;
	if($category){
		$args = array(
			'cat' => $category_id,
			'posts_per_page' => -1
		);

		$the_query = new WP_Query($args);

		$article_title_array = array();

		if($the_query->have_posts()){
			while($the_query->have_posts()){
				$the_query->the_post();
				$post_title = get_the_title();
                $post_id = get_the_ID();

				if($data['lang']) {
					$post_title = cache_set_or_get( $data['lang'], 'title' . $data['lang'] . $post_id, $post_title );
				}

				$article_title_array[] = array(
					'title' => $post_title,
					'slug'  => get_post( get_the_ID() )->post_name
				);
			}
		}

		return $article_title_array;
	}else{
		return false;
	}
}


add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'support-index/(?P<slug>[a-zA-Z0-9-]+)(?:/(?P<lang>[^/]+))?', array(
		'methods' => 'get',
		'callback' => 'support_index_by_slug',
	));
});


function paginated_releases(WP_REST_Request $request){

	$args = array(
	    'post_type' => 'release',
		'posts_per_page' => $request['items'],
		'paged' => $request['page'],
		"meta_key" => "date",
		"orderby" => "meta_value_num",
        "order" => 'DESC',
        "post_status" => "publish"
	);

	$the_query = new WP_Query($args);
	if($the_query->have_posts()){
		$posts_array = array();
		while($the_query->have_posts()){
			$the_query->the_post();
			$post_id = get_the_ID();
			$post_title = get_the_title();
			$post_content = get_the_content();
			if($request['lang']){
				$post_title = cache_set_or_get($request['lang'], 'title'.$request['lang'].$post_id, $post_title);
				$post_content = cache_set_or_get($request['lang'], 'content'.$request['lang'].$post_id, $post_content);
			}

			$post_array = array(
				"title" => $post_title,
			    "release_date" => get_field('date'),
			    "version" => get_field('version'),
				"content" => $post_content
			);
			$posts_array[] = $post_array;
		}

		$page_divide = $the_query->found_posts/$request['items'];

		if(is_float($page_divide)){
			$page_count = round($page_divide);
		}else{
			$page_count = round($page_divide);
		}

		return array("page_count" => $page_count, "posts" => $posts_array);
	}else{
		return array('msg' => 'no posts found', 'code' => 203);
	}

}

add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'releases/(?P<items>\d+)/(?P<page>\d+)', array(
		'methods' => 'GET',
		'callback' => 'paginated_releases',
	));
});


function blog_index(WP_REST_Request $request){
    
    $blog_subs = get_categories([
         'parent' => 5,
         'hide_empty' => 1
    ]);
    
    
    $menu_items = wp_get_nav_menu_items('blogs-menu');

    foreach($menu_items as $item){
            if(isset($request['lang'])){
                $cat_name = cache_set_or_get($request['lang'], "cat".$request['lang'].basename($sub->url), $item->title);
                 $nav_array[] = [$cat_name, basename($item->url)];
            }else{
                 $nav_array[] = [$item->title, basename($item->url)];
            }
    }
    
    $posts = [];
    
    if ($blog_subs){
        
        foreach ( $menu_items as $sub ) {
            
            $term = get_term_by('slug', basename($sub->url), 'category');
            
            $recent_args = [
                'posts_per_page' => 4,
                'cat' => $term->term_id,
                'order' => 'DESC'
            ];
            
            $query = new WP_Query($recent_args);
        
            if($query->have_posts()){
                
                $posts = [];
                
                while($query->have_posts()){
                    $query->the_post();
                    $title = get_the_title();
                    $content = get_the_content();
                    $post_id = get_the_ID();
                    $author_id = get_post($post_id)->post_author;
                    $author = get_user_by('ID', $author_id);
                    $date = get_post($post_id)->post_date;
                    
                     if(isset($request['lang'])){
                        $title = cache_set_or_get($request['lang'], 'title'.$request['lang'].$post_id, $title);
                        $content = cache_set_or_get($request['lang'], 'content'.$request['lang'].$post_id, $content);
                     }
                     
                     if(!in_array($posts, ['id' => $post_id, 'title' => $title, 'content' => $content, 'slug' => get_post($post_id)->post_name, 'featured_image' => get_the_post_thumbnail_url($post_id), 'author' => $author->display_name, 'date' => $date])){
                         $posts[] = ['id' => $post_id, 'title' => $title, 'content' => $content, 'slug' => get_post($post_id)->post_name, 'featured_image' => get_the_post_thumbnail_url($post_id), 'author' => $author->display_name, 'date' => $date];
                     }
                }
            }
            
            
            $subs[] = ['cat_name' => $sub->title, 'cat_slug' => basename($sub->url), 'posts' => $posts];
        
        }
        
    }
    
    
    
    return ['nav_array' => $nav_array, 'cat' => $subs];

}


add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', 'blogindex(?:/(?P<lang>[^/]+))?', array(
		'methods' => 'GET',
		'callback' => 'blog_index',
	));
});


function blog_sub_cat_index(WP_REST_Request $request){

	$blog_subs = get_categories([
		'parent' => 5,
		'hide_empty' => 1
	]);

	if (isset($blog_subs)){
		foreach ($blog_subs as $sub){
		    
		    if(isset($request['lang'])){
		       $cat_name = cache_set_or_get($request['lang'], "cat".$request['lang'].$sub->term_id, $sub->name);
			   
			   $subs[] = ['cat_name' => $cat_name, 'posts' => []];
		    }else{
		       
			   $subs[] = ['cat_name' => $sub->name, 'posts' => []];
		    }
		    
		    
		}
	}

	$recent_args = [
		'posts_per_page' => $request['items'],
		'paged' => $request['page'],
		'cat' => get_term_by( 'slug', $request['cat'], 'category' )->term_id,
		'order' => 'DESC'
	];

    $cat_posts = new WP_Query($recent_args);

    $total_posts = $cat_posts->found_posts;
    
    $page = ceil($total_posts/$request['items']);

    if($cat_posts->have_posts()){
        
        while($cat_posts->have_posts()){
            $cat_posts->the_post();
            $post_id = get_the_ID();
            $title = get_the_title();
            $content = get_the_content();
	        $author_id = get_post($post_id)->post_author;
	        $author = get_user_by('ID', $author_id);
	        $date = get_post($post_id)->post_date;

            if(isset($request['lang'])){
	            $title = cache_set_or_get($request['lang'], 'title'.$request['lang'].$post_id, $title);
	            $content = cache_set_or_get($request['lang'], 'content'.$request['lang'].$post_id, $content);
            }

	        $posts[] = ['id' => $post_id, 'title' => $title, 'content' => $content, 'slug' => get_post($post_id)->post_name, 'featured_image' => get_the_post_thumbnail_url($post_id), 'author' => $author->display_name, 'date' => $date];

        }
    }else{
        $posts = [];
    }
    
    $menu_items = wp_get_nav_menu_items('blogs-menu');

    foreach($menu_items as $item){
            if(isset($request['lang'])){
                $cat_name = cache_set_or_get($request['lang'], "cat".$request['lang'].basename($sub->url), $item->title);
                 $nav_array[] = [$cat_name, basename($item->url)];
            }else{
                 $nav_array[] = [$item->title, basename($item->url)];
            }
    }


	return ['page_count' => $page, 'nav_array' => $nav_array, 'posts' => $posts];

}


add_action( 'rest_api_init', function () {
	register_rest_route( 'lalicat', '(?P<cat>[a-zA-Z0-9-]+)/(?P<items>\d+)/(?P<page>\d+)(?:/(?P<lang>[^/]+))?', array(
		'methods' => 'GET',
		'callback' => 'blog_sub_cat_index',
	));
});
