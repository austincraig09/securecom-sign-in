import { makeSuspendable } from "./utils";

export function vkUrl(env) {
  switch (env) {
    case "dev1":
      return "https://apid.securecomwireless.com";
    case "verification":
      return "https://apiv.securecomwireless.com";
    default:
      return "https://api.securecomwireless.com";
  }
}

export function odUrl(env) {
  switch (env) {
    case "dev1":
      return "https://odd.securecomwireless.com";
    case "verification":
      return "https://odv.securecomwireless.com";
    default:
      return "https://od.securecomwireless.com";
  }
}

export default function createApi(env, authToken) {
  const aboutMe = async () => {
    const response = await fetch(
      `${vkUrl(env)}/v2/about_me?auth_token=${authToken}`
    );
    if (response.ok) {
      const { user } = await response.json();
      return user;
    }

    throw response;
  };

  return {
    authToken,
    myUser: makeSuspendable(aboutMe()),
    customers: async () => {
      const user = await aboutMe();
      const response = await fetch(
        `${vkUrl(env)}/v2/dealers/${
          user.accessible_id
        }/customers?auth_token=${authToken}`
      );
      if (response.ok) {
        return response.json();
      }

      throw response;
    },
    systems: async customerId => {
      const user = await aboutMe();
      const response = await fetch(
        `${odUrl(env)}/api/v1/dealers(${
          user.accessible_id
        })/vk.GetControlSystems?$expand=panels&$filter=customer_id+eq+${customerId}&auth_token=${authToken}`
      );
      if (response.ok) {
        return response.json();
      }

      throw response;
    }
  };
}

let t =
  "https://odd.securecomwireless.com/api/v1/dealers(741)/vk.GetControlSystems?$expand=panels&$filter=customer_id+eq+22091&auth_token=KuxRycNVyLMQneJHs85K";
