package cesaugusto108.dsmeta.services;

import cesaugusto108.dsmeta.entities.Sale;
import cesaugusto108.dsmeta.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class SalesService {
    @Autowired
    private SalesRepository salesRepository;

    public Page<Sale> findSales(String startDate, String endDate,Pageable pageable) {
        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        LocalDate start = startDate.equals("") ? today.minusYears(1) : LocalDate.parse(startDate);
        LocalDate end = endDate.equals("") ? today : LocalDate.parse(endDate);

        return salesRepository.findSales(start, end, pageable);
    }
}
