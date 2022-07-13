package cesaugusto108.dsmeta.repositories;

import cesaugusto108.dsmeta.entities.Sale;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface SalesRepository extends JpaRepository<Sale, Long> {
    @Query("SELECT obj FROM Sale obj WHERE obj.date BETWEEN :start AND :end ORDER BY obj.total DESC")
    Page<Sale> findSales(LocalDate start, LocalDate end, Pageable pageable);
}
