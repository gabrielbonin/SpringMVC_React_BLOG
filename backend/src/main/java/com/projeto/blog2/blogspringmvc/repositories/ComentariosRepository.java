package com.projeto.blog2.blogspringmvc.repositories;

import com.projeto.blog2.blogspringmvc.models.Comentarios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComentariosRepository extends JpaRepository<Comentarios, Long> {

}
