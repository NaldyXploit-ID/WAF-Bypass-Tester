<?php
header('Content-Type: application/json');
echo json_encode(['project'=>'${REPO_NAME}','time'=>date('c')], JSON_PRETTY_PRINT);
