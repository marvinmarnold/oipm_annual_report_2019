check.vars(c("UOF.CSV.DIRTY", "UOF.CSV.SANITIZED", "CSV_SEP"))

uof.dirty <- read.csv(UOF.CSV.DIRTY, stringsAsFactors = FALSE, sep = ",", na.strings=c("","NA"))
occurred.date.format <- "%m/%d/%Y"

uof.dirty <- uof.dirty %>% mutate(
  Year.of.Record = substr(PIB.File.Number, 4, 7),
  year.of.record = Year.of.Record,
  Month.occurred = format(as.Date(Date.Occurred, occurred.date.format),"%m"),
  
  # Mappings from open data column names to expected names based on SQL scripts
  FIT.Number = PIB.File.Number,
  Force.type = Use.of.Force.Type,
  Force.level = Use.of.Force.Level,
  District.or.division = Division.level,
  Reason.for.force = Use.of.Force.Reason
)

write.table(uof.dirty, UOF.CSV.SANITIZED, sep = CSV_SEP)
