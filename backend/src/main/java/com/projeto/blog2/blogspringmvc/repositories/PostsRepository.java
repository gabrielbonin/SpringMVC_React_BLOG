package com.projeto.blog2.blogspringmvc.repositories;

import com.projeto.blog2.blogspringmvc.models.Posts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepository extends JpaRepository<Posts, Long> {

}
