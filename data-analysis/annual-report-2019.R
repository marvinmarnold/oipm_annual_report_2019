########################################################################################################
################################## 2018 ANNUAL REPORT MAIN SCRIPT ######################################

# Reset environment
rm(list = ls())
setwd("/home/user/code/oipm/annual-report-2019/data-analysis")
print(paste("Working directory set to:", getwd()))
readRenviron(".Renviron")

########################################################################################################
######################################## GLOBAL VARIABLES ##############################################
#setwd("/home/pili/code/oipm/annual-report-2018/")

# The current year to analyze
#IAPRO.FIRST.YEAR <- 2016
CURRENT.YEAR <- 2019
PLOTLY.OUTPUT.PATH <- "../src/data/"

# If source data is available, set to true.
# If the only data available is coming from a public repository, this should probably be set to false.
#RECLEAN_DATA <- TRUE

# Will force all the graphs to recompute
#REGEN_ANALYSIS <- FALSE

CSV_SEP <- ";"

############################################ DATA PATHS ################################################
######### Use of Force
UOF.CSV.SANITIZED <- "../data-sanitized/NOPD_Use_of_Force_Incidents_20200214.csv"

######### Allegations
ALLEGATIONS.CSV.DIRTY <- "../data-raw/NOPD_Misconduct_Complaints_20200214.csv"
ALLEGATIONS.CSV.SANITIZED <- "../data-sanitized/allegations-clean.csv"

########################################################################################################
######################################## LOAD DEPENDENCIES #############################################
# Load libraries
library(dplyr)
library(plotly)
library(stringr)
#library(tidyr)

# Local helpers
source("lib/utils.R")

########################################################################################################
############################################ CLEAN DATA ################################################

print("Running sanitizers")
load.subdirectory("../data-sanitizers")

########################################################################################################
############################################# LOAD DATA ################################################

allegations.all <- read.csv(ALLEGATIONS.CSV.SANITIZED, stringsAsFactors = FALSE, sep = CSV_SEP)

########################################################################################################
########################################## PERFORM ANALYSIS ############################################
#nrow(uof.all)
nrow(allegations.all)

