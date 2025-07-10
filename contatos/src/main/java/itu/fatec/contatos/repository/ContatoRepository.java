package itu.fatec.contatos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import itu.fatec.contatos.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {
List<Contato> findByFavoritoTrue();

}
