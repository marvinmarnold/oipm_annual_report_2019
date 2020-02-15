check.vars(c("ALLEGATIONS.CSV.DIRTY", "ALLEGATIONS.CSV.SANITIZED", "CSV_SEP"))

allegations.dirty <- read.csv(ALLEGATIONS.CSV.DIRTY, stringsAsFactors = FALSE, sep = ",")
allegations.all <- allegations.dirty %>% mutate(
  Year.of.Record = format(as.Date(Date.Complaint.Occurred),"%Y")
)

write.table(allegations.dirty, ALLEGATIONS.CSV.SANITIZED, sep = CSV_SEP)
