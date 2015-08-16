<?php

namespace ISA\Bundle\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ISAAppBundle:Default:index.html.twig', array('name' => $name));
    }
}
