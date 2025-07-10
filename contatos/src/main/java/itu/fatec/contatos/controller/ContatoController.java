package itu.fatec.contatos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import itu.fatec.contatos.model.Contato;
import itu.fatec.contatos.service.ContatoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/contatos")
public class ContatoController {

    @Autowired
    private ContatoService contatoService;

    @GetMapping
    public List<Contato> listar() {
        return contatoService.findAll();
    }

    @GetMapping("/favoritos")
    public List<Contato> listarFavoritos() {
        return contatoService.findFavoritos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contato> buscarPorId(@PathVariable Long id) {
        Optional<Contato> contato = contatoService.findById(id);
        return contato.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Contato salvar(@RequestBody Contato contato) {
        return contatoService.save(contato);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contato> atualizar(@PathVariable Long id, @RequestBody Contato contatoDetalhes) {
        Optional<Contato> contatoOptional = contatoService.findById(id);
        if (contatoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Contato contato = contatoOptional.get();
        contato.setNome(contatoDetalhes.getNome());
        contato.setApelido(contatoDetalhes.getApelido());
        contato.setTelefone(contatoDetalhes.getTelefone());
        contato.setEmail(contatoDetalhes.getEmail());
        contato.setEndereco(contatoDetalhes.getEndereco());
        contato.setDataNascimento(contatoDetalhes.getDataNascimento());
        contato.setCategoria(contatoDetalhes.getCategoria());
        contato.setRedeSocial(contatoDetalhes.getRedeSocial());
        contato.setObservacoes(contatoDetalhes.getObservacoes());
        contato.setFavorito(contatoDetalhes.isFavorito());

        Contato atualizado = contatoService.save(contato);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        Optional<Contato> contatoOptional = contatoService.findById(id);
        if (contatoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        contatoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
