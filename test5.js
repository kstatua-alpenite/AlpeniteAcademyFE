/**

Visibilità prodotto : 

    isActive                false   true        true
    isInStock               true    true        false
    isWarehouseClose        true    true        true

Dati prodotto:

    name                    Pizza   Piadina     Kebab
    price                   8       5           4.5
    qty                     10      30          20

Dati generici: 

    taxRate                 21      21          21
    shippingPrice           1       0.5         0.5


Tre box a frontend:


____________________|____________________|____________________|
IMMAGINE DELLA      |IMMAGINE DELLA      |IMMAGINE DEL        |
PIZZA               |PIADINA             |KEBAB               |
                    |                    |                    |
quantità della      |quantità della      |quantità del        |
Pizza               |Piadina             |Kebab               |
                    |                    |                    |
Button acquista     |Button acquista     |Button acquista     |
                    |                    |                    |
____________________|____________________|____________________|


<input id="pizza" type="number"/>
<input id="piadina" type="number"/>
<input id="kebab" type="number"/>
<script type="text/javascript">
    function getData(productName) {
        return document.getElementById(productName).value;
    }
</script>

*/
