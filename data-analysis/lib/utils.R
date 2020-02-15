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
