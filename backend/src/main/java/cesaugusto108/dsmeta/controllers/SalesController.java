package cesaugusto108.dsmeta.controllers;

import cesaugusto108.dsmeta.entities.Sale;
import cesaugusto108.dsmeta.services.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
    @Autowired
    private SalesService salesService;

    @GetMapping
    public List<Sale> findSales() {
        return salesService.findSales();
    }
}
