import environment from "./config";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { formatNearAmount } from "near-api-js/lib/utils/format";

const nearEnv = environment("testnet");

export async function initializeContract() {
  //near object  to interact with the NEAR network. holds a keyStores object that stores the wallet information in brower's local storage.
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearEnv
    )
  );
  //WalletConnection object to interact with the wallet.(To sign in, sign out, get accountId, get account balance).
  window.walletConnection = new WalletConnection(near);
  window.accountId = window.walletConnection.getAccountId();
  //Contract object to interact with the smart contract.
  //pass the account, the name of the smart contract, and the methods we want to use.
  //When developing with NEAR, not need ABI
  window.contract = new Contract(
    window.walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ["getProduct", "getProducts"],
      changeMethods: ["buyProduct", "setProduct"],
    }
  );
}

export async function accountBalance() {
  return formatNearAmount(
    (await window.walletConnection.account().getAccountBalance()).total,
    2
  );
}

export async function getAccountId() {
  return window.walletConnection.getAccountId();
}

export function login() {
  window.walletConnection.requestSignIn(nearEnv.contractName);
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}
