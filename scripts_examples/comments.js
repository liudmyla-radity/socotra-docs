/* Place single line comments on a newline above the subject of the comment */
// bad
const active = true; // is current tab

// good
// is current tab
const activeTab = true;


/* Divide big entities into blocks separated by region comments. */
const handleAddBaseDataToExposurePerils = () => {
    data.updates?.updateExposures?.forEach((exposure, index) => {
      // #region Get full exposure data from policy
      const exposureData = getPolicyExposure(exposures, exposure.exposureLocator);
      if (!exposureData) return;
      // #endregion
  
      // #region For each peril type in exposure create a modifyed array of perils, check description and version for each peril
      const { addPerils, updatePerils } = ["addPerils", "updatePerils"].reduce(
        (acc, perilType) => {
          const existingPerils = exposure?.[perilType] || [];
          let updatedPerils = [];
  
          if (existingPerils.length && existingPerils.length > 0) {
            updatedPerils = existingPerils;
          }
  
          acc[perilType] = updatedPerils;
          return acc;
        },
        { addPerils: [], updatePerils: [] }
      );
      // #endregion
  
      // #region Generate exposureId if it's missing
      const { fieldValues: exposureFieldValues } =
        exposureData.characteristics[
          (exposureData.characteristics?.length ?? 1) - 1
        ];
  
      const exposureId =
        exposureFieldValues?.exposureId?.length > 0
          ? exposureFieldValues?.exposureId
          : generateUUID();
      // #endregion
  
      // #region  Update exposure in autofill data
      data.updates.updateExposures[index] = {
        ...data.updates.updateExposures[index],
        fieldValues: {
          ...data.updates.updateExposures[index]?.fieldValues,
          exposureId,
        },
        addPerils,
        updatePerils,
      };
      // #endregion
    });
  };
  