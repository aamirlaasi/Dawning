module.exports = function (sequelize, DataTypes) {
  var Child = sequelize.define("child", {
    child_LASTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    CHILD_FIRSTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // CHILD_MIDDLEINT: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]    
    //   }
    // },
    BIRTHDAY: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // CLASSROOM: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // SCHOOL: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    ENROLL_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // DROP_DATE: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // TEACHER: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    DOCTOR_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    DOCTOR_ADDRESS: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    DOCTOR_PHONE: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    HOSPITAL_PREF: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    GENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    RACE: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    ALLERGY_1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    // ALLERGY_2: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ALLERGY_3: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ALLERGY_4: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ALLERGY_5: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    ALLERGY_RESOLVE_1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    // ALLERGY_RESOLVE_2: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ALLERGY_RESOLVE_3: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ALLERGY_RESOLVE_4: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ALLERGY_RESOLVE_5: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // }, 
    MEDICAL_CONDITION_1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    MEDICAL_RESPONSE_1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    DRUG_LIST: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    DRUG_RESPONSE: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    // MEDICAL_CONDITION_5: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    SPECIAL_BEHAVIORS: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    BEHAVIOR_RESPONSE: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    OTHER_CONDITIONS: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    CHILD_ARRIVAL_TIME: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    CHILD_DEPARTURE_TIME: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    POTTY: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    // ATTEND_DAY_MONDAY: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ATTEND_DAY_TUESDAY: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ATTEND_DAY_WEDNESDAY: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ATTEND_DAY_THURSDAY: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ATTEND_DAY_FRIDAY: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ATTEND_DAY_SATURDAY: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ATTEND_DAY_SUNDAY: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // TRANSPORTATION_PERMISSION_SCHOOL: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // TRANSPORTATION_PERMISSION_EMER: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // TRANSPORTATION_PERMISSION_HOME: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // iMMUNIZATION_RECORDS: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // COMMENTS: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // HEALTH_STATEMENT: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // }
  }, {
    freezeTableName: true
  });
  return Child;
};