<?php

/**
 * Template Name: Template fewp-test
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['test_page_options'] = get_fields('options');
Timber::render(array('page-test.twig'), $context);
