const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    // Application details
    dateOfApplication: Date,
    position: String,
    employmentType: [String],

    // Personal information
    fullName: String,
    nationality: String,
    address: String,
    phone: String,
    email: String,
    dob: Date,
    bloodGroup: String,
    yearsOfWork: Number,
    maritalStatus: [String],
    aadharNo: String,

    // Education (flat fields)
    eduDegree1: String,
    eduInstitute1: String,
    eduYear1: String,
    eduGrade1: String,
    eduCity1: String,

    eduDegree2: String,
    eduInstitute2: String,
    eduYear2: String,
    eduGrade2: String,
    eduCity2: String,

    eduDegree3: String,
    eduInstitute3: String,
    eduYear3: String,
    eduGrade3: String,
    eduCity3: String,

    // Employment history
    empCompany1: String,
    empPosition1: String,
    empYear1: String,
    empReason1: String,

    empCompany2: String,
    empPosition2: String,
    empYear2: String,
    empReason2: String,

    // Skills & training
    skillName1: String,
    skillAchievement1: String,
    skillLevel1: String,
    skillYear1: String,
    skillInstitute1: String,

    skillName2: String,
    skillAchievement2: String,
    skillLevel2: String,
    skillYear2: String,
    skillInstitute2: String,

    // Family
    familyName1: String,
    familyRelation1: String,
    familyOccupation1: String,

    familyName2: String,
    familyRelation2: String,
    familyOccupation2: String,

    // Emergency
    emName1: String,
    emRelation1: String,
    emOccupation1: String,
    emQualification1: String,
    emCity1: String,

    // Joining details
    joiningDate: Date,
    fees: String,
    firstInstallment: Date,
    secondInstallment: Date,
    thirdInstallment: Date,
    companyName: String,
    receivingPerson: String,
    receivingSignature: String,
    hrSignature: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);