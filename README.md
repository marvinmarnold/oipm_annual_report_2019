# OIPM 2019 Annual Report

**THIS IS A WORK IN PROGRESS**. Data, wording, and charts are all unofficial at this moment. 
The 2018 report can be found [here](https://annual-report-2018.nolaipm.gov/) and its source code is also on [Github](https://github.com/marvinmarnold/oipm_annual_report_2018).

This repository contains the source code for OIPM's annual report. 
It also contains sanitized data that can be used to fully reproduce all calculuations.
The code is broken up into several components:

1. `/data-sources`: SQL scripts that assume access to NOPD datasets, not generally available to the public.
2. `/data-raw`: The output of `data-sources` in CSV format. This data contains unsanitized data and will not be fully uploaded publicly. 
3. `/data-sanitizers`: R scripts that transform `data-raw` into a format that is safe to share publicly.
4. `/data-sanitized`: The output of `data-sanitizers`, in CSV format.
3. `/data-analysis`: R scripts that analyze `data-sanitized`.
4. `/data-processed`: The output of `data-analysis`, in Plotly compatible JSON.
5. `/`: The top level is a React based website built with Gatsby to display the results of everything above.