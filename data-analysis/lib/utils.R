################################################################################
################################################################################
## Utilities

check.var <- function(var.name) {
  if (!exists(var.name)) {
    stop(paste("ERROR: Variable name", var.name, "must be set."))
  }
}

check.vars <- function(var.names) {
  print.result.to.null.output <- lapply(var.names, check.var)
}

load.subdirectory <- function(subdir) {
  file.sources <- list.files(path = paste0(subdir), pattern="*.R$", recursive = TRUE, full.name = TRUE)
  lapply(file.sources, function(source.file) {
    print(paste("Loading file:", source.file))
    source(source.file)
  })
}