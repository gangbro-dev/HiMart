import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { Box, Button, Card } from "@mui/material";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function QRMaker() {
  const [userid] = useState();
  const [time, setTime] = useState(Date.now());
  const initialValue = `${userid}/${time}`;
  const [value, setValue] = useState(initialValue);
  const [countdown, setCountdown] = useState(59);
  const ref = React.useRef(null);

  useEffect(() => {
    if (countdown === 0) {
      setTime(Date.now());
      setValue(initialValue);
      setCountdown(59);
    } else {
      const intervalId = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [countdown, initialValue]);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  });

  const handleButtonClick = () => {
    setTime(Date.now());
    setValue(`${userid}/${time}`);
    setCountdown(59);
  };

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Card
        sx={{
          fontSize: 33,
          padding: 2,
          textAlign: "center",
          backgroundColor: "#64b5f6",
          fontWeight: "bold",
        }}
      >
        QR생성
      </Card>
      <Grid style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Grid item xs={1} />
        <Grid item xs={10} mt={12}>
          <CssBaseline />
          <Card sx={{ border: 1, padding: 1, maxWidth: 400, maxHeight: 500 }}>
            <div>
              <QRCode value={value} size="100%" />
            </div>
            <Card sx={{ textAlign: "center", mb: 1 }}>
              <Button onClick={handleButtonClick} sx={{fontWeight:'bold'}}>
                QR 재생성
              </Button>
            </Card>
            <Card sx={{ textAlign: "center", mb: 1, fontWeight:'bold' }}>
              자동 재생성까지 {countdown}초
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QRMaker;
