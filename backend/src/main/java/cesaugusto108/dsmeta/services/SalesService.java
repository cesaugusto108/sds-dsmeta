package cesaugusto108.dsmeta.services;

import cesaugusto108.dsmeta.entities.Sale;
import cesaugusto108.dsmeta.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesService {
    @Autowired
    private SalesRepository salesRepository;

    public List<Sale> findSales() {
        return salesRepository.findAll();
    }
}
