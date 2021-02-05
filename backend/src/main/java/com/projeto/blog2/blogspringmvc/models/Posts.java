package com.projeto.blog2.blogspringmvc.models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Posts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String descricao;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    private List<Comentarios> lista_comentarios;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuarios autor_post;

    @Deprecated
    public Posts() {
    }

    public Posts(Long id, String titulo, String descricao, Usuarios autor_post) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor_post = autor_post;
    }

    public Posts(Long id, String titulo, String descricao) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
    }

    public Posts(Long id, String titulo, String descricao, List<Comentarios> lista_comentarios, Usuarios autor_post) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.lista_comentarios = lista_comentarios;
        this.autor_post = autor_post;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Comentarios> getLista_comentarios() {
        return this.lista_comentarios;
    }

    public void setLista_comentarios(List<Comentarios> lista_comentarios) {
        this.lista_comentarios = lista_comentarios;
    }

    public Usuarios getAutor_post() {
        return this.autor_post;
    }

    public void setAutor_post(Usuarios autor_post) {
        this.autor_post = autor_post;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", titulo='" + getTitulo() + "'" + ", descricao='" + getDescricao() + "'"
                + ", lista_comentarios='" + getLista_comentarios() + "'" + ", autor_post='" + getAutor_post() + "'"
                + "}";
    }

}
