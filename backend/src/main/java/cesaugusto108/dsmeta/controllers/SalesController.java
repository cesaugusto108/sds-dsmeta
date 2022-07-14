package cesaugusto108.dsmeta.controllers;

import cesaugusto108.dsmeta.entities.Sale;
import cesaugusto108.dsmeta.services.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
    @Autowired
    private SalesService salesService;

    @GetMapping
    public Page<Sale> findSales(@RequestParam(value = "startDate", defaultValue = "") String startDate,
                                @RequestParam(value = "endDate", defaultValue = "") String endDate,
                                Pageable pageable) {
        return salesService.findSales(startDate, endDate, pageable);
    }
}
