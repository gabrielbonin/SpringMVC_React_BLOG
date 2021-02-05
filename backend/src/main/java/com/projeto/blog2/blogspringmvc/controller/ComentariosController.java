package com.projeto.blog2.blogspringmvc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.projeto.blog2.blogspringmvc.models.Comentarios;
import com.projeto.blog2.blogspringmvc.repositories.ComentariosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api/v1/")
public class ComentariosController {

    @Autowired
    ComentariosRepository cRepository;

    // getAll
    @GetMapping("/comentarios")
    public List<Comentarios> getAllComents() {
        return cRepository.findAll();
    }

    // newComentario
    @PutMapping("/comentarios/novo-comentario")
    public Comentarios criarComentario(@RequestBody Comentarios coment) {
        return cRepository.save(coment);
    }

    // findById
    @GetMapping("/comentarios/{id}")
    public Optional<Comentarios> getComentarioById(@PathVariable Long id) {
        return cRepository.findById(id);
    }

    // findbyPost
    // @RequestMapping(value = "/postagens/visualizar_pub/{postid}", method =
    // RequestMethod.GET)
    // public List<Comentarios> getComentsByPost(@PathVariable ("postid") long id,
    // Posts publicacao){
    // // cRepository.fin
    // }

    // Update post
    @PutMapping("/comentarios/{id}")
    public ResponseEntity<Comentarios> updateComentario(@PathVariable Long id, @RequestBody Comentarios comentDetail) {

        Comentarios coment = cRepository.findById(id).orElseThrow();

        coment.setConteudo(comentDetail.getConteudo());
        coment.setAutor_comentario(comentDetail.getAutor_comentario());

        Comentarios updatedPosts = cRepository.save(coment);

        return ResponseEntity.ok(updatedPosts);

    }

    // Delete post
    @DeleteMapping("/comentarios/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteComentario(@PathVariable Long id) {
        Comentarios coment = cRepository.findById(id).orElseThrow();
        cRepository.delete(coment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deletado", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
