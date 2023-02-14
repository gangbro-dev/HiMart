from sqlalchemy import select
from sqlalchemy.orm import Session

from db.models.model import Product_Kiosk, Shopping


def select_products_with_rfid(rfids: list, db: Session):
    rlt = list()
    # rlt = db.execute(select(Product_Kiosk).where(Product_Kiosk.rfid.in_(rfids)))
    # rlt = db.query(Product_Kiosk).filter(Product_Kiosk.rfid.in_(rfids)).all()
    # q = db.query(Product_Kiosk).filter(Product_Kiosk.rfid==rid).first()
    # q = db.scalars(select(Product_Kiosk).where(Product_Kiosk.rfid.in_(rfids)))
    for rid in rfids:
        print("db.query filter_by[str]", rid)
        q = db.query(Product_Kiosk).filter_by(rfid=rid).all()
    stmt = select(Product_Kiosk).where(Product_Kiosk.rfid.in_(rfids))
    scl = db.scalars(stmt)
    print("db scalar", scl, type(scl))
    for prd in scl:
        print("db.scalars", prd)
    for prd in db.query(Product_Kiosk).filter(Product_Kiosk.rfid.in_(rfids)).all():
        print("db.query filter[list]", prd)
    for i in range(1, 4):
        val = db.query(Product_Kiosk).get(i)
        print(type(val), val)
        rlt.append(val)

    return rlt


def copy_products(products: list, db: Session):
    for prd in products:
        product = Product_Kiosk(
            productId= prd['productId'],
            name= prd['name'],
            price= prd['price'],
            rfid= prd['rfid'],
            barcode= prd['barcode'],
            image= prd['image']
        )
        db.add(product)
    db.commit()
    i = len(db.query(Product_Kiosk).all())
    return i


def create_product(products: list, db: Session):
    for prd in products:
        product = Product_Kiosk(
            productId= prd['productId'],
            name= prd['name'],
            price= prd['price'],
            rfid= prd['rfid'],
            barcode= prd['barcode'],
            image= prd['image']
        )
        db.add(product)
    i = len(products)
    db.commit()
    return i


def delete_product(ids: list, db: Session):
    for id in ids:
        db.query(Product_Kiosk).filter(Product_Kiosk.productId == id).delete()
    i = len(ids)
    db.commit()
    return i


def create_shopping(shoppings: list, date, db: Session):
    for shp in shoppings:
        shopping = Shopping(
            count=shp["count"],
            price=shp["price"],
            date=date,
            productKioskId=shp["productKioskId"]
        )
        db.add(shopping)
    db.commit()

