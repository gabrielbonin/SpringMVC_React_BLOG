package com.projeto.blog2.blogspringmvc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import com.projeto.blog2.blogspringmvc.repositories.UsuariosRepository;
import com.projeto.blog2.blogspringmvc.models.Usuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UsuariosController {

    @Autowired
    private UsuariosRepository usuariosRepository;

    // get all users
    @GetMapping("/usuarios")
    public List<Usuarios> getAllUsuarios() {
        return usuariosRepository.findAll();

    }
    //create user
    @PostMapping("/usuarios/novo-usuario")
    public  Usuarios criarUsuario(@RequestBody Usuarios usuario){
        return usuariosRepository.save(usuario);   
    }
    //findById
    @GetMapping("/usuarios/{id}")
    public Optional <Usuarios> getUserById(@PathVariable Long id){
        return usuariosRepository.findById(id); 
    }
    //Update User
    @PutMapping("/usuarios/{id}")
    public ResponseEntity <Usuarios> updateUser(@PathVariable Long id, @RequestBody Usuarios usuarioDetail){

           Usuarios usuario = usuariosRepository.findById(id).orElseThrow();
            usuario.setNome(usuarioDetail.getNome());
            usuario.setEmail(usuarioDetail.getEmail());
        
        Usuarios updatedUser = usuariosRepository.save(usuario);
        return ResponseEntity.ok(updatedUser); 

    }
    //Delete User
    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
        Usuarios usuario = usuariosRepository.findById(id).orElseThrow();

        usuariosRepository.delete(usuario);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deletado", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}