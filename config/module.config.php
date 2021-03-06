<?php
return array(
    'router' => include __DIR__ . '/module/router.config.php',

    'doctrine' => array(
        'driver' => array(
            'app_driver' => array(
                'paths' => array(__DIR__ . '/../src/HcbComments/Entity')
            ),
            'orm_default' => array(
                'drivers' => array(
                    'HcbComments\Entity' => 'app_driver'
                )
            )
        )
    ),

    'asset_manager' => array(
        'resolver_configs' => array(
            'paths' => array(
                'HcbComments' => __DIR__ . '/../public',
            )
        )
    ),

    'di' => include __DIR__ . '/module/di.config.php',

    'hc-backend'=> array(
        'packages' => array(
            'hcb-comments' => array(
                'js'=>array(
                    'type'=>'content',
                    'http_path'=>'/js/src/hcb-comments'
                )
            )
        )
    )
);
