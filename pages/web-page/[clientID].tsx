import { ApiService } from "@/lib/api/api-service";
import { IUserInfo, IUserWebData } from "@/lib/api/models";
import { IContactLink } from "@/lib/api/models/user-contacts-model";
import { ClientWebPage } from "@/lib/ui/clientWebPage";

export async function getServerSideProps({ query }: any) {
  const response = await ApiService.fetchUser(query.clientID); //initial request for the page of the user (by userid/username provided as query (query.clientID))

  if (!response?.data.data) {
    //if api service didnt return response.data.data, means that page of the requested user doesnt exist
    return {
      redirect: {
        permanent: true,
        destination: "/404",
      },
    };
  }
  // if response.data.data exists so we put this to the props of the page
  return {
    props: {
      userData: {
        userInfo: response?.data.data.userInfo,
        userWebData: response?.data.data.userWebData,
        contacts: response?.data.data.contacts
      },
    },
  };
}

type Props = {
  userData: {
    userInfo: IUserInfo;
    userWebData: IUserWebData;
    contacts: IContactLink[]
  };
};

export default function WebPage(props: Props) {
  return <ClientWebPage userData={props.userData} />;
}
