import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, Container } from "@mui/material";
import Link from "@mui/material/Link";
import axios from "axios";
import HOST from "../../Host";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AccountInfo = async (data) => {
  // formdata처리

  
  // get
  console.log("AccountInfo");
  const API_URI = `${HOST}/api/user/{userId}`;
  await axios
    .get(API_URI)
    .then((response) => {
      // TODO 계정 정보 처리 로직

    })
    .catch(function (err) {
      console.log(err);
    });
}

export default function Account() {
  AccountInfo();
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          flexGrow: 1,

          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            mt: 2,
            border: 1,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 35,
            backgroundColor: "#64b5f6",
          }}
        >
          내 정보 수정
        </Card>
        <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
          <Grid item xs={4}>
            <Item>아이디</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>as****34</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>패스워드</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>●●●●●●●●●●●●</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>이름</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>홍*동</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>휴대전화</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>010-****-1111</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>성별</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Male</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>생년월일</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>1997.11.11</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>이메일</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>.</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>주소</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>.</Item>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2, mb: 2 }}>
          <Grid item xs>
            <Link href="/app/register" variant="body2">
              개인정보인증
            </Link>
          </Grid>
          <Grid item>
            <Link href="/app/findid" variant="body2">
              비밀번호 변경
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
