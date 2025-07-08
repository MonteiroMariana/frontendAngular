package itu.fatec.contatos.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import itu.fatec.contatos.model.Contato;
import itu.fatec.contatos.repository.ContatoRepository;

@Service
public class ContatoService {

    private final ContatoRepository contatoRepository;

    public ContatoService(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    public List<Contato> findAll() {
        return contatoRepository.findAll();
    }
    public List<Contato> findFavoritos() {
    return contatoRepository.findByFavoritoTrue();
}

    public Optional<Contato> findById(Long id) {
        return contatoRepository.findById(id);
    }

    public Contato save(Contato contato) {
        return contatoRepository.save(contato);
    }

    public void deleteById(Long id) {
        contatoRepository.deleteById(id);
    }
}
