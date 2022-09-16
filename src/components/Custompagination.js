import { createTheme, Pagination, Stack, ThemeProvider } from "@mui/material";

const Custompagination = ({ setPage, page, total_pages }) => {
  const handlePageChange = (textContent) => {
    setPage(textContent);
    window.scroll(0, 0);
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack alignItems={"center"} justifyContent={"center"} marginTop={10}>
        <Pagination
          count={total_pages}
          color="primary"
          onChange={(e) => handlePageChange(e.target.textContent)}
          hidePrevButton
          hideNextButton
        />
      </Stack>
    </ThemeProvider>
  );
};

export default Custompagination;
