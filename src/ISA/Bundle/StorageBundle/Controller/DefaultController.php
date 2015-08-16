<?php

namespace ISA\Bundle\StorageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ISAStorageBundle:Default:index.html.twig', array('name' => $name));
    }
}
