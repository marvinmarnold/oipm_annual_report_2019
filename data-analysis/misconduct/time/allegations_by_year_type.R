check.vars(c("allegations.all"))
title <- "Allegations by year"

start.year <- 2016
end.year <- 2018

########################################################################################################
########################################################################################################

xs <- c(2016, 2016, 2017, 2017, 2018, 2018)
ys <- c(821, 821+327, 622, 622+380, 612, 612+332)
vals <- c(821, 327, 622, 380, 612, 332)

# ys <- c(327, 821, 380, 622, 332, 612)
# vals <- c(327, 821, 380, 622, 332, 612)

annotations <- list(x = xs, y = ys, text = vals, xanchor = 'center',
                    yanchor = 'top',
                    showarrow = FALSE)

allegations.all %>% filter(Year.of.Record == 2016) %>% nrow
allegations.by.year <- allegations.all %>% 
  filter(Year.of.Record >= start.year) %>%
  filter(Year.of.Record <= end.year) %>%
  group_by(Year.of.Record, Incident.type)

count.by.year.type <- summarise(allegations.by.year, num = n())

p.allegations.by.year.type <- plot_ly(count.by.year.type) %>%
  
  # Stacked bars by exp
  add_trace(x = ~Year.of.Record, 
            y = ~num, 
            type = 'bar',  
            name = ~Incident.type, 
            color = ~Incident.type) %>%
  
  layout(barmode = 'stack',
         margin = list(b = 150),
         hovermode = 'compare',
         xaxis = list(title = "Year", 
                      dtick = 1,
                      showgrid = F), 
         
         yaxis = list(title = "Number of allegations", showgrid = T)) %>%
  
  layout(annotations = annotations)

p.allegations.by.year.type
gen.plotly.json(p.allegations.by.year.type, "allegations-by-year-type")
