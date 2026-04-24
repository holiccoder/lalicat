<?php

function cache_replace($lang, $key, $translate_value){
    	$tr = set_lang($lang);
		try{
		    if($lang === "ja"){
		        $translate_value = strip_tags($translate_value);
		    }
		    $translated = $tr->translate($translate_value);
		    wp_cache_replace($key, $translated);
		    return wp_cache_get($key);
		}catch(exception $e){
              if($e){
                   wp_cache_replace($key, $translate_value);
		           return wp_cache_get($key);
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
				$check = in_category(array(36, 38, 37, 32, 34, 31, 33, 40), get_the_ID());
				if($check){
					$post_type = 'support';
				}
			}
			

			if(isset($data['lang'])){
			    
			       //首先查询有没有，如果有就不插入，如果没有就插入
			       
			       $check_post_exists = get_posts(array(
                       'meta_key'   => 'postid',
                       'meta_value' => $data['lang']."_".$post_id,
                   ));
                   
                   if(empty($check_post_exists)){
                       $insert = wp_insert_post(array(
			               'post_content' => $post_content,
			               'post_title' => $post_title,
			               'post_type' => $data['lang'],
			               'meta_input' => array(
			                    'keywords' => $keywords,
			                    'description' => $description,
			                    'postid' => $data['lang']."_".$post_id
			               )
			           ));
			           
			           if($insert){
			            $post_title = cache_set_or_get($data['lang'], 'title'.$data['lang'].$post_id, $post_title);
				        $post_content = cache_set_or_get($data['lang'], 'content'.$data['lang'].$post_id, $post_content);
				            if($keywords){
				                $keywords = cache_set_or_get($data['lang'], 'keywords'.$data['lang'].$post_id, $keywords);
				            }

				            if($description){
					             $description = cache_set_or_get($data['lang'], 'description'.$data['lang'].$post_id, $description);
				            }
			            
			            }
                   }else{
                      //这里要重新set, 不能用原来的set了
                      $title = get_post($check_post_exists[0]->ID)->post_title;
                      $content = get_post($check_post_exists[0]->ID)->post_content;
                      $keywords = get_post_meta($check_post_exists[0]->ID, "keywords", true);
                      $description = get_post_meta($check_post_exists[0]->ID, "description", true);
                       
                      $post_title = cache_replace($data['lang'], 'title'.$data['lang'].$post_id, $title);
                      $post_content = cache_replace($data['lang'], 'content'.$data['lang'].$post_id, $content);
                      if($keywords){
                          $keywords = cache_replace($data['lang'], 'keywords'.$data['lang'].$post_id, $keywords);
                      }
                      
                      if($description){
                          $description = cache_replace($data['lang'], 'description'.$data['lang'].$post_id, $description);
                      }
                      
                   }
			   
			}

			$post_array = array(
				"title" => $post_title,
				"keywords" => $keywords,
				"description" => $description,
				"featured_image" => get_the_post_thumbnail_url(get_the_ID()),
				"author" => get_the_author(),
				"slug" => get_post(get_the_ID())->post_name,
				"date" => get_the_date(),
				"content" => $post_content,
				"post_type" => $post_type
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