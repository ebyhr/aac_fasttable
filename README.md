fasttable is custom visualization for Aster AppCenter, is faster than original table view.  

### Sample Query
```sql
insert into app_center_visualizations (json) values (  
'{  
     "db_table_name": "nc_system.nc_all_tables",  
     "vizType": "fasttable",  
     "title": "Report by fasttable"  
}')
```
