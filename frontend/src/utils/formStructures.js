// Form structures for XTransport forms

export const quickQuoteFormStructure = {
  contactInfo: {
    companyName: {
      type: 'text',
      label: 'Company Name',
      placeholder: 'Your Company Name',
      required: false
    },
    firstName: {
      type: 'text',
      label: 'First Name',
      placeholder: 'John',
      required: true
    },
    lastName: {
      type: 'text',
      label: 'Last Name',
      placeholder: 'Doe',
      required: true
    },
    email: {
      type: 'email',
      label: 'Email Address',
      placeholder: 'john@example.com',
      required: true
    },
    phoneNumber: {
      type: 'tel',
      label: 'Phone Number',
      placeholder: '(555) 123-4567',
      required: true
    }
  },
  shipmentDetails: {
    pickupLocation: {
      type: 'text',
      label: 'Pickup Location',
      placeholder: 'City, State/Province',
      required: true
    },
    deliveryLocation: {
      type: 'text',
      label: 'Delivery Location',
      placeholder: 'City, State/Province',
      required: true
    },
    pickupDate: {
      type: 'date',
      label: 'Pickup Date',
      required: true
    },
    freightType: {
      type: 'select',
      label: 'Freight Type',
      options: [
        'General Freight',
        'Heavy Equipment',
        'Refrigerated',
        'Flatbed',
        'Oversized Load'
      ],
      required: true
    },
    weight: {
      type: 'number',
      label: 'Approximate Weight (lbs)',
      placeholder: '1000',
      required: true
    },
    dimensions: {
      length: {
        type: 'number',
        label: 'Length (ft)',
        required: true
      },
      width: {
        type: 'number',
        label: 'Width (ft)',
        required: true
      },
      height: {
        type: 'number',
        label: 'Height (ft)',
        required: true
      }
    }
  }
};

export const driverApplicationFormStructure = {
  personalInfo: {
    firstName: {
      type: 'text',
      label: 'First Name',
      required: true
    },
    lastName: {
      type: 'text',
      label: 'Last Name',
      required: true
    },
    email: {
      type: 'email',
      label: 'Email',
      required: true
    },
    phone: {
      type: 'tel',
      label: 'Phone Number',
      required: true
    },
    address: {
      street: {
        type: 'text',
        label: 'Street Address',
        required: true
      },
      city: {
        type: 'text',
        label: 'City',
        required: true
      },
      province: {
        type: 'text',
        label: 'Province/State',
        required: true
      },
      postalCode: {
        type: 'text',
        label: 'Postal/ZIP Code',
        required: true
      }
    }
  },
  drivingExperience: {
    licenseType: {
      type: 'select',
      label: 'License Type',
      options: ['Class 1/AZ', 'Class A CDL'],
      required: true
    },
    licenseNumber: {
      type: 'text',
      label: 'License Number',
      required: true
    },
    yearsOfExperience: {
      type: 'number',
      label: 'Years of Experience',
      required: true
    },
    crossBorderExperience: {
      type: 'radio',
      label: 'Do you have cross-border experience?',
      options: ['Yes', 'No'],
      required: true
    },
    violations: {
      type: 'textarea',
      label: 'List any violations in the last 3 years',
      required: false
    }
  },
  qualifications: {
    hasFastCard: {
      type: 'radio',
      label: 'Do you have a FAST Card?',
      options: ['Yes', 'No'],
      required: true
    },
    hasCleanAbstract: {
      type: 'radio',
      label: 'Do you have a clean driver abstract?',
      options: ['Yes', 'No'],
      required: true
    },
    preferredRoutes: {
      type: 'select',
      label: 'Preferred Routes',
      options: [
        'Long Haul',
        'Regional',
        'Local',
        'Cross-Border'
      ],
      multiple: true,
      required: true
    }
  }
};

export const operatorApplicationFormStructure = {
  personalInfo: {
    firstName: {
      type: 'text',
      label: 'First Name',
      required: true
    },
    lastName: {
      type: 'text',
      label: 'Last Name',
      required: true
    },
    email: {
      type: 'email',
      label: 'Email',
      required: true
    },
    phone: {
      type: 'tel',
      label: 'Phone Number',
      required: true
    }
  },
  equipmentInfo: {
    truckYear: {
      type: 'number',
      label: 'Truck Year',
      required: true
    },
    truckMake: {
      type: 'text',
      label: 'Truck Make',
      required: true
    },
    truckModel: {
      type: 'text',
      label: 'Truck Model',
      required: true
    },
    trailerType: {
      type: 'select',
      label: 'Trailer Type',
      options: [
        'Dry Van',
        'Reefer',
        'Flatbed',
        'Step Deck',
        'Double Drop'
      ],
      required: true
    },
    trailerYear: {
      type: 'number',
      label: 'Trailer Year',
      required: true
    }
  },
  businessInfo: {
    companyName: {
      type: 'text',
      label: 'Company Name',
      required: true
    },
    yearsInBusiness: {
      type: 'number',
      label: 'Years in Business',
      required: true
    },
    insuranceProvider: {
      type: 'text',
      label: 'Insurance Provider',
      required: true
    },
    dot: {
      type: 'text',
      label: 'DOT Number',
      required: true
    }
  }
};

export const contactFormStructure = {
  personalInfo: {
    name: {
      type: 'text',
      label: 'Full Name',
      placeholder: 'John Doe',
      required: true,
      icon: 'User'
    },
    email: {
      type: 'email',
      label: 'Email Address',
      placeholder: 'john@example.com',
      required: true,
      icon: 'Mail'
    },
    phone: {
      type: 'tel',
      label: 'Phone Number',
      placeholder: '(555) 123-4567',
      required: false,
      icon: 'Phone'
    }
  },
  messageDetails: {
    subject: {
      type: 'text',
      label: 'Subject',
      placeholder: 'Heavy Equipment Transport Inquiry',
      required: false
    },
    message: {
      type: 'textarea',
      label: 'Message',
      placeholder: 'Please describe your transportation needs...',
      required: true,
      rows: 5
    }
  },
  departments: {
    dispatch: {
      title: 'Dispatch',
      email: 'shipping@xtransport.ca',
      phone: '368-599-9677 x 1',
      icon: 'Truck',
      bgColor: 'blue'
    },
    safety: {
      title: 'Safety & Compliance',
      email: 'compliance@xtransport.ca',
      phone: '368-599-9677 x 3',
      icon: 'Shield',
      bgColor: 'green'
    },
    general: {
      title: 'General Inquiries',
      email: 'info@xtransport.ca',
      phone: '368-599-9677 x 0',
      icon: 'MessageSquare',
      bgColor: 'purple'
    },
    accounting: {
      title: 'Accounting',
      email: 'accounting@xtransport.ca',
      phone: '368-599-9677 x 2',
      icon: 'Calculator',
      bgColor: 'orange'
    }
  }
};
