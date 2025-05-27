import {
  StyleSheet,
  Text,
  View,
  Modal,
  Platform,
  Linking,
  Pressable,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const NotificationScreen: FC = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!hasPermission) {
      setShowModal(true);
    }
  }, [hasPermission]);

  const handleAllowPress = async () => {
    const permission = await requestPermission();
    if (!permission) {
      // Still denied, maybe permanently — open settings
      if (Platform.OS === 'android') {
        Linking.openSettings();
      } else {
        Linking.openURL('app-settings:');
      }
    } else {
      setShowModal(false);
    }
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <PermissionModal visible={showModal} onAllow={handleAllowPress} />
      </View>
    );
  }

  if (device == null) return <NoCameraDeviceError />;

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

const PermissionModal = ({
  visible,
  onAllow,
}: {
  visible: boolean;
  onAllow: () => void;
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Camera Permission Needed</Text>
          <Text style={styles.modalText}>
            We need access to your camera to proceed. Please allow camera
            permission.
          </Text>
          <Pressable style={styles.allowButton} onPress={onAllow}>
            <Text style={styles.allowButtonText}>Allow</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const NoCameraDeviceError = () => (
  <View style={styles.container}>
    <Text style={styles.errorTxtStyle}>No camera device found.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTxtStyle: {
    fontSize: 18,
    color: 'red',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  allowButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  allowButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NotificationScreen;
