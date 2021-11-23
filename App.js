import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";

import NetInfo from "@react-native-community/netinfo";
import XeroWebview from "./components/XeroWebview.js";

const Button = ({ children, ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
);

const NoInternetModal = ({ show, onRetry }) => (
  <Modal isVisible={show} style={styles.modal} animationInTiming={600}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Connection Error</Text>
      <Text style={styles.modalText}>
        Oops! Looks like your device is not connected to the Internet.
      </Text>
      <Button onPress={onRetry}>Try Again</Button>
    </View>
  </Modal>
);

export default function App() {
  /*const [isOffline, setOfflineStatus] = useState(true);
  console.log("Is before offline :" + isOffline);

  const internetConnection = async () => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
      console.log("Is After offline :" + offline);
    });
    //removeNetInfoSubscription();
  };

  useEffect(() => {
    internetConnection();
  }, []);
  setOfflineStatus(true);
  if (isOffline) return <ActivityIndicator size="large" />;*/
  return (
    <SafeAreaView style={styles.container}>
      <XeroWebview hide={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  modalText: {
    fontSize: 18,
    color: "#555",
    marginTop: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});
