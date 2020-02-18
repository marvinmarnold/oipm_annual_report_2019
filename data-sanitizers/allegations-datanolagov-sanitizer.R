check.vars(c("ALLEGATIONS.CSV.DIRTY", "ALLEGATIONS.CSV.SANITIZED", "CSV_SEP"))

allegations.date.format <- "%m/%d/%Y %I:%M:%S %p"
allegations.dirty <- read.csv(ALLEGATIONS.CSV.DIRTY, stringsAsFactors = FALSE, sep = ",", na.strings=c("","NA"))

allegations.dirty <- allegations.dirty %>% mutate(
  # Should use the tracking number instead of inferring from dates
  #Year.of.Record = case_when(
  #  is.na(Date.Complaint.Occurred) ~ format(as.Date(Date.Complaint.Received.by.NOPD..PIB., allegations.date.format),"%Y"),
  #  TRUE ~ format(as.Date(Date.Complaint.Occurred, allegations.date.format),"%Y")
  #),
  Year.of.Record = substr(Complaint.Tracking.Number, 0, 4),
  Incident.type = Incident.Type 
)

write.table(allegations.dirty, ALLEGATIONS.CSV.SANITIZED, sep = CSV_SEP)
