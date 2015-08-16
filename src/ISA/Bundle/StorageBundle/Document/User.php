<?php
/**
 * Created by CSCV.
 * Desc: 用户文档
 * User: Woo
 * Date: 17/8/16
 * Time: 下午2:57
 */

namespace ISA\Bundle\StorageBundle\Document;


use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use FOS\UserBundle\Document\User as BaseUser;

/**
 * @MongoDB\Document
 */
class User extends BaseUser
{
    /**
     * @MongoDB\Id(strategy="auto")
     */
    protected $id;

    public function __construct()
    {
        parent::__construct();
    }


    /**
     * Get id
     *
     * @return id $id
     */
    public function getId()
    {
        return $this->id;
    }
}
