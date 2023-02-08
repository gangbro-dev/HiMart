from asyncio import run

from fastapi import APIRouter, Request

from routes.models import BarcodeList, CardList, RFIDList
from functions.serial_test import RFID_Serial_Trans
from core.config import KIOSK_ID

# from sqlalchemy.orm import Session


router = APIRouter(
    prefix="/api/kiosk",  # url 앞에 고정적으로 붙는 경로추가
)  # Route 분리


@router.get("")
def 키오스크_아이디(request: Request):
    return {"kioskId": KIOSK_ID}


@router.post("/cardinfo")
def 카드정보전송(request: Request, CardList: CardList):
    data = run(request.json())
    userId = data["userId"]
    defaultCardId = data["defaultCardId"]
    cardList = data["cardList"]
    # RFID 시작
    RFID_Serial_Trans().main()
    ###
    # 웹소켓 자리
    ###
    return {"message": "미완성 API"}


@router.post("/rfid")
def 장바구니_상품담기_RFID(request: Request, RFIDList: RFIDList):
    data = run(request.json())
    kioskId = data["kioskId"]   # 꼭 필요한가?
    rfid_list = data["rfid"]    # 문자열 리스트
    ###
    # 웹소켓 자리
    ###
    return {"message": "미완성 API"}


@router.post("/barcode")
def 장바구니_상품담기_Barcode(request: Request, BarcodeList: BarcodeList):
    data = run(request.json())
    kioskId = data["kioskId"]   # 꼭 필요한가?
    barcode = data["barcode"]   # 문자열 1개
    ###
    # 웹소켓 자리
    ###
    return {"message": "미완성 API"}
