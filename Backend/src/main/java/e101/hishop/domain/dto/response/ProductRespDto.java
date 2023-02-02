package e101.hishop.domain.dto.response;

import e101.hishop.domain.entity.PayDetail;
import e101.hishop.domain.entity.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ProductRespDto {

    private Long id;

    private String name;

    private Long price;

    private String rfid;

    private String barcode;

    private String image;

    @Builder
    public ProductRespDto(Long id, String name, Long price, String rfid, String barcode, String image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rfid = rfid;
        this.barcode = barcode;
        this.image = image;
    }

    public static ProductRespDto of (Product product) {
        return ProductRespDto.builder()
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .rfid(product.getRfid())
                .barcode(product.getBarcode())
                .image(product.getImage())
                .build();
    }

}
