check.vars(c("UOF.CSV.DIRTY", "UOF.CSV.SANITIZED", "CSV_SEP"))

uof.dirty <- read.csv(UOF.CSV.DIRTY, stringsAsFactors = FALSE, sep = ",", na.strings=c("","NA"))

uof.dirty <- uof.dirty %>% mutate(
  Year.of.Record = substr(PIB.File.Number, 4, 7)
)

write.table(uof.dirty, UOF.CSV.SANITIZED, sep = CSV_SEP)
