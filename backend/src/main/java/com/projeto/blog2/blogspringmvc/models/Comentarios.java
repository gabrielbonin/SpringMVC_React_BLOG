package com.projeto.blog2.blogspringmvc.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Comentarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String conteudo;

    @ManyToOne
    @JoinColumn(name = "autor_comentario")
    private Usuarios autor_comentario;

    public Comentarios() {
    }

    public Comentarios(Long id, String conteudo, Usuarios autor_comentario) {
        this.id = id;
        this.conteudo = conteudo;
        this.autor_comentario = autor_comentario;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getConteudo() {
        return this.conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public Usuarios getAutor_comentario() {
        return this.autor_comentario;
    }

    public void setAutor_comentario(Usuarios autor_comentario) {
        this.autor_comentario = autor_comentario;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", conteudo='" + getConteudo() + "'" + ", autor_comentario='"
                + getAutor_comentario() + "'" + "}";
    }

}