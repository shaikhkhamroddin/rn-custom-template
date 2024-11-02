export const getTestID = (name = '') => {
  const keyId = name?.replace(/\s+/g, '-').toLowerCase();
  return {
    testID: keyId,
    accessibilityLabel: keyId,
  };
};
