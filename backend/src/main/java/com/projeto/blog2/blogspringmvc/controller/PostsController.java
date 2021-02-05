package com.projeto.blog2.blogspringmvc.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.projeto.blog2.blogspringmvc.models.Comentarios;
import com.projeto.blog2.blogspringmvc.models.Posts;
import com.projeto.blog2.blogspringmvc.repositories.ComentariosRepository;
import com.projeto.blog2.blogspringmvc.repositories.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PostsController {

    @Autowired
    private PostsRepository postsRepository;

    @Autowired
    private ComentariosRepository cRepository;

    // get all posts
    @GetMapping("/postagens")
    public List<Posts> getAllPosts() {
        return postsRepository.findAll();

    }

    // create post
    @PostMapping("/postagens/novo-post")
    public Posts criarPost(@RequestBody Posts post) {
        return postsRepository.save(post);
    }

    // addComentario 1
    public ResponseEntity<Posts> addComent(long id, Comentarios comentarios) {
        Posts post = postsRepository.getOne(id);
        post.getLista_comentarios().add(comentarios);
        postsRepository.save(post);
        return ResponseEntity.ok(post);

    }

    // addComentario
    @RequestMapping(value = "/postagens/visualizar_pub/{postid}/novo-comentario", method = RequestMethod.POST)
    public String addPost(@PathVariable("postid") long id, @RequestBody Comentarios comentario) {
        addComent(id, comentario);
        return ("redirect:/postagens");
    }

    // UpdateComentario
    @RequestMapping(value = "/postagens/alterar-comentario/{id_comentario}", method = RequestMethod.PUT)
    public String updtPost(@PathVariable("id_comentario") long id_comentario, @RequestBody Comentarios comentarios) {

        saveUpdtComent(id_comentario, comentarios);
        return ("redirect:/postagens");

    }

    // updtComent 2
    public ResponseEntity<Comentarios> saveUpdtComent(long id_comentario, @RequestBody Comentarios comentarioDetail) {

        Comentarios comentarios = cRepository.getOne(id_comentario);
        comentarios.setConteudo(comentarioDetail.getConteudo());
        comentarios.setAutor_comentario(comentarioDetail.getAutor_comentario());
        cRepository.save(comentarios);
        return ResponseEntity.ok(comentarios);

    }

    // public ResponseEntity<Comentarios> showComent(long id, long id_c) {
    // postsRepository.getOne(id);
    // Comentarios comentarios = cRepository.findById(id_c).orElseThrow();

    // return ResponseEntity.ok(comentarios);
    // }

    // removeComentario 1
    public ResponseEntity<Posts> removeComent(long id, Long id_c) {
        Posts post = postsRepository.getOne(id);
        Comentarios comentario = cRepository.findById(id_c).orElseThrow();
        post.getLista_comentarios().remove(comentario);

        postsRepository.save(post);
        return ResponseEntity.ok(post);
    }

    // excluirComentario
    @RequestMapping(value = "/postagens/visualizar_pub/{postid}/comentario/{id_comentario}", method = RequestMethod.DELETE)
    public String removeComentarioPost(@PathVariable("postid") long id, @PathVariable("id_comentario") long id_c) {
        removeComent(id, id_c);
        return ("redirect:/postagens");
    }

    // findById
    @GetMapping("/postagens/visualizar_pub/{id}")
    public Optional<Posts> getPostsById(@PathVariable Long id) {
        return postsRepository.findById(id);
    }

    // Update post
    @PutMapping("/postagens/visualizar_pub/{id}")
    public ResponseEntity<Posts> updatePosts(@PathVariable Long id, @RequestBody Posts postsDetail) {

        Posts post = postsRepository.findById(id).orElseThrow();

        post.setDescricao(postsDetail.getDescricao());
        post.setTitulo(postsDetail.getTitulo());
        post.setAutor_post(postsDetail.getAutor_post());
        post.setLista_comentarios(post.getLista_comentarios());
        // coments
        // post.setLista_comentarios(postsDetail.getLista_comentarios());

        Posts updatedPosts = postsRepository.save(post);

        return ResponseEntity.ok(updatedPosts);

    }

    // Delete post
    @DeleteMapping("/postagens/visualizar_pub/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
        Posts post = postsRepository.findById(id).orElseThrow();
        postsRepository.delete(post);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deletado", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // coments

    @GetMapping("/comentarios")
    public List<Comentarios> getAllComentarios() {
        return cRepository.findAll();

    }

    @GetMapping("/postagens/alterar-comentario/{id}")
    public Optional<Comentarios> getComentarioPostId(@PathVariable Long id) {
        return cRepository.findById(id);
    }

    @PutMapping("/comentarios/{id}")
    public ResponseEntity<Comentarios> updateComentario(@PathVariable Long id, @RequestBody Comentarios comentDetail) {

        Comentarios coment = cRepository.findById(id).orElseThrow();

        coment.setConteudo(comentDetail.getConteudo());
        coment.setAutor_comentario(comentDetail.getAutor_comentario());

        Comentarios updatedPosts = cRepository.save(coment);

        return ResponseEntity.ok(updatedPosts);

    }

}
