########################################################################################################
################################## 2018 ANNUAL REPORT MAIN SCRIPT ######################################

# Reset environment
rm(list = ls())
setwd("/home/user/code/oipm/annual-report-2019/data-analysis")
print(paste("Working directory set to:", getwd()))
readRenviron(".Renviron")

############################################ CONSTANTS #################################################
######### Use of Force
UOF.CSV.SANITIZED <- "../data-sanitized/NOPD_Use_of_Force_Incidents_20200214.csv"

######### Allegations
ALLEGATIONS.CSV.SANITIZED <- "../data-sanitized/NOPD_Misconduct_Complaints_20200214.csv"

########################################################################################################
############################################# LOAD DATA ################################################
uof.all <- read.csv(UOF.CSV.SANITIZED, stringsAsFactors = FALSE, sep = ",")
allegations.all <- read.csv(ALLEGATIONS.CSV.SANITIZED, stringsAsFactors = FALSE, sep = ",")

########################################################################################################
########################################## PERFORM ANALYSIS ############################################
nrow(uof.all)
nrow(allegations.all)

