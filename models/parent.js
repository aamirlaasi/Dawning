module.exports = function (sequelize, DataTypes) {
  var Parent = sequelize.define("PARENT", {
    PRIM_PARENT_LASTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    PRIM_PARENT_FIRSTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    PRIM_PARENT_PHONE_1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]    
      }
    },
    PRIM_PARENT_PHONE_2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]    
      }
    },
    // PRIM_PARENT_EMAIL: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]    
    //   }
    // },
    SEC_PARENT_LASTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    SEC_PARENT_FIRSTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    SEC_PARENT_PHONE_1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]    
      }
    },
    SEC_PARENT_PHONE_2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]    
      }
    },
    ADDRESS: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    CITY: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    // STATE: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    ZIP: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT1_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT1_PHONE1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT1_PHONE2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT1_ADDRESS: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },    
    EMR_CONTACT2_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT2_PHONE1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT2_PHONE2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT3_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT3_PHONE1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT3_PHONE2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT4_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT4_PHONE1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EMR_CONTACT4_PHONE2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // PKUP_CONTACT1_NAME: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // PKUP_CONTACT1_PHONE: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // PKUP_CONTACT2_NAME: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // PKUP_CONTACT2_PHONE1: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // PKUP_CONTACT3_NAME: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // PKUP_CONTACT3_PHONE1: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // CACFP_DATE: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // CACFP_STATUS: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // CACFP_HH: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // cacf_income: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // CACFP_PAYFREQ: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // NCI_TERM_DATE: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // NCI_AUTHORIZATION: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // NCI_CONTACT: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // TOTAL_PAID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    PAY_FREQUENCY: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    START_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    TUITION_AMOUNT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    AUTHORIZE_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    END_CARE_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    // ACCOUNT_OPEN: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
    // ACCOUNT_CLOSED: {
    //   type: DataTypes.DATEONLY,
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
    // LAST_UPDATE: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }      
    // },
  }, {
    freezeTableName: true
  });
  return Parent;
};