import axios from "axios";

type Laporan = {
  id: string;
  email: string;
  first_name: string;
};

type GetLaporanResponse = {
  data: Laporan[];
};

async function getLaporan() {
  try {
    const { data, status } = await axios.get<GetLaporanResponse>(
      "https://4771d15e-8011-4829-bafb-87c538aacc11.mock.pstmn.io/api/v0/sales/sales/list?order=ASC&page=2&take=150&start_date=2023-10-25&finish_date=null",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    // console.log(JSON.stringify(data, null, 4));
    // console.log('response status is: ', status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export { getLaporan };
